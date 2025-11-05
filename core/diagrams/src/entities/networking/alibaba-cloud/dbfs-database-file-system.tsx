import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DBFS_DATABASE_FILE_SYSTEM = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbfs_database_file_system;',
  },
  _original_width: 47.400000000000006,
  _original_height: 48,
}

export function DbfsDatabaseFileSystem(props: NodeProps) {
  return (
    <Shape
      {...DBFS_DATABASE_FILE_SYSTEM}
      {...props}
      _style={extendStyle(DBFS_DATABASE_FILE_SYSTEM, props)}
    />
  )
}
