import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SDK = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.external_sdk;',
  },
  _original_width: 68,
  _original_height: 78,
}

export function Sdk(props: NodeProps) {
  return <Shape {...SDK} {...props} _style={extendStyle(SDK, props)} />
}
