import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_COMPUTING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.cloud_computing;fillColor=#066A90;',
  },
  _width: 50,
  _height: 32,
}

export function CloudComputing(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_COMPUTING}
      {...props}
      _style={extendStyle(CLOUD_COMPUTING, props)}
    />
  )
}
