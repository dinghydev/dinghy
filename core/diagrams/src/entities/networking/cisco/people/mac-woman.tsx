import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAC_WOMAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.mac_woman;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 67,
  _height: 107,
}

export function MacWoman(props: NodeProps) {
  return (
    <Shape {...MAC_WOMAN} {...props} _style={extendStyle(MAC_WOMAN, props)} />
  )
}
