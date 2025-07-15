import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DBS_DATABASE_BACKUP = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbs_database_backup;',
  _width: 68.39999999999999,
  _height: 63.9,
}

export function DbsDatabaseBackup(props: DiagramNodeProps) {
  return <Shape {...DBS_DATABASE_BACKUP} {...props} />
}
