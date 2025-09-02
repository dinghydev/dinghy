import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DBS_DATABASE_BACKUP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbs_database_backup;',
  },
  _original_width: 68.39999999999999,
  _original_height: 63.9,
}

export function DbsDatabaseBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...DBS_DATABASE_BACKUP}
      {...props}
      _style={extendStyle(DBS_DATABASE_BACKUP, props)}
    />
  )
}
