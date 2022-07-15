defmodule FoederWeb.Resolvers.Users do
  alias Foeder.Repo
  alias Foeder.Accounts.User
  import FoederWeb.Resolvers.Authz

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

end
