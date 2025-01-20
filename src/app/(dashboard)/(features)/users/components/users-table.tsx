'use client'

import { DataTable } from '@/components/data-table/data-table'
import { columns } from './users-columns'
import { userTypes } from '../data/data'

interface UsersTableProps {
  data: any[]
}

export function UsersTable({ data }: UsersTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterColumn="username"
      filterPlaceholder="Filter users..."
      filters={[
        {
          column: 'status',
          title: 'Status',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Invited', value: 'invited' },
            { label: 'Suspended', value: 'suspended' },
          ],
        },
        {
          column: 'role',
          title: 'Role',
          options: userTypes.map((t) => ({ ...t })),
        },
      ]}
      responsiveColumns={{
        role: 640,
        status: 640,
      }}
    />
  )
}
