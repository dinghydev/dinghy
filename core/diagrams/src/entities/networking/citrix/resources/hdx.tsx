import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HDX = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.hdx;',
  },
  _width: 50,
  _height: 25.595000000000002,
}

export function Hdx(props: NodeProps) {
  return <Shape {...HDX} {...props} _style={extendStyle(HDX, props)} />
}
