defmodule FoederWeb.Resolvers.Authz do
  alias Foeder.Repo
  alias Foeder.Accounts.User

  def get_in?(obj, keys) do
    obj
    |> get_in(Enum.map(keys, &(Access.key(&1))))
  end

  defmacro permission(permission_set, do: expr) do
    quote do
      required_permission = var!(resolution) 
                            |> get_in?([ 
                              :context, 
                              :current_user, 
                              :user_permissions, 
                              unquote(permission_set) 
                            ])
      if(required_permission) do
        unquote(expr)
      else
        {:error, "Missing authorization: " <> Atom.to_string(unquote(permission_set))}
      end
    end
  end
end
