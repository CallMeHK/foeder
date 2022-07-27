defmodule FoederWeb.Resolvers.Users do
  alias Foeder.Repo
  alias Foeder.Accounts.{User, UserPermissions}
  import FoederWeb.Resolvers.Authz
  import Ecto.Query
  use Ecto.Schema

  defp format_user_for_response(user) do
    user
    |> Map.delete(:password)
    |> Map.delete(:hashed_password)
    |> Map.merge(%{ 
      inserted_at: NaiveDateTime.to_string(user.inserted_at), 
      updated_at: NaiveDateTime.to_string(user.updated_at) 
    })
  end

  def list_users(_parent, _args, resolution) do
    permission :can_admin_users do
      users = User
        |> Repo.all()
        |> Enum.map(&format_user_for_response/1)
      {:ok, users}
    end
  end

  def list_user_permissions(parent_user, _args, resolution) do
    permission :can_admin_users do
      permissions = UserPermissions
        |> where(user_id: ^parent_user.id)
        |> Repo.one()

      add_if_permitted = fn list, permission -> 
        if Map.get(permissions, permission) do
          list ++ [Atom.to_string(permission)]
        else
          list
        end
      end

      permitted_actions = []
                          |> add_if_permitted.(:is_super_admin)
                          |> add_if_permitted.(:can_admin_users)

      {:ok, %{
        id: permissions.id,
        permitted_actions: permitted_actions,
        updated_at: permissions.updated_at
      }}
    end
  end

end
