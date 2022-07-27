import * as React from 'react'
import { EditUserModal } from './EditUserModal'
import { useGetAllUsersQuery } from '../../graphql'

const UserTable = () => {
    const {data, loading} = useGetAllUsersQuery()

    if(loading) return <div>loading...</div>
    return <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Permissions</th>
              <th>Confirmation</th>
              <th>User updated</th>
              <th>Permissions updated</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
              {data?.users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.permissions.permittedActions.join(', ') || "No permissions"}</td>
                  <td>{user.confirmedAt || "Not confirmed"}</td>
                  <td>{user.updatedAt}</td>
                  <td>{user.permissions.updatedAt}</td>
                  <td>{user.insertedAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <EditUserModal/>
    </div>

}

export {
    UserTable
}
