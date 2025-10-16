import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_UPLOADING = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_uploading',
  },
  _original_width: 100,
  _original_height: 84,
}

export function DatabaseUploading(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_UPLOADING}
      {...props}
      _style={extendStyle(DATABASE_UPLOADING, props)}
    />
  )
}
