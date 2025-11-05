import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DAAS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.daas;',
  },
  _width: 50,
  _height: 37.735,
}

export function Daas(props: NodeProps) {
  return <Shape {...DAAS} {...props} _style={extendStyle(DAAS, props)} />
}
