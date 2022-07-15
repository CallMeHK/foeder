defmodule FoederWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation

  object :user do
    field :id, :id
    field :email, :string
    field :confirmed_at, :string
    field :inserted_at, :string
    field :updated_at, :string
  end
end
