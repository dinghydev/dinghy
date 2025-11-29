import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CATH_LAB = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.cath_lab;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 100,
}

export function CathLab(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CATH_LAB)} />
}
