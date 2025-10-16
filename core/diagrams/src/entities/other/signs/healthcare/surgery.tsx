import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SURGERY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.surgery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 98,
}

export function Surgery(props: DiagramNodeProps) {
  return <Shape {...SURGERY} {...props} _style={extendStyle(SURGERY, props)} />
}
