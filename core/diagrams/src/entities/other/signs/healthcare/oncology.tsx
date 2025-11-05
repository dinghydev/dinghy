import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONCOLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.oncology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Oncology(props: NodeProps) {
  return (
    <Shape {...ONCOLOGY} {...props} _style={extendStyle(ONCOLOGY, props)} />
  )
}
