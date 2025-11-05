import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICES = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.devices;',
  },
  _width: 113.3,
  _height: 50,
}

export function Devices(props: NodeProps) {
  return <Shape {...DEVICES} {...props} _style={extendStyle(DEVICES, props)} />
}
