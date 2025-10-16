import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICES = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_devices;pointerEvents=1',
  },
  _width: 100,
  _height: 73,
}

export function Devices(props: DiagramNodeProps) {
  return <Shape {...DEVICES} {...props} _style={extendStyle(DEVICES, props)} />
}
