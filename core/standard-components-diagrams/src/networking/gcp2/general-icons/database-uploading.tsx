import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_UPLOADING = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_uploading',
  _width: 100,
  _height: 84,
}

export function DatabaseUploading(props: DiagramNodeProps) {
  return <Shape {...DATABASE_UPLOADING} {...props} />
}
