import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTERNAL_DATA_RESOURCE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.external_data_resource',
  },
  _original_width: 79,
  _original_height: 100,
}

export function ExternalDataResource(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_DATA_RESOURCE}
      {...props}
      _style={extendStyle(EXTERNAL_DATA_RESOURCE, props)}
    />
  )
}
