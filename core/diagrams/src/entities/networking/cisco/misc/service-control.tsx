import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_CONTROL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.service_control;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 74,
  _height: 48,
}

export function ServiceControl(props: NodeProps) {
  return (
    <Shape
      {...SERVICE_CONTROL}
      {...props}
      _style={extendStyle(SERVICE_CONTROL, props)}
    />
  )
}
