import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOOTPHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.hootphone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 46,
}

export function Hootphone(props: DiagramNodeProps) {
  return (
    <Shape {...HOOTPHONE} {...props} _style={extendStyle(HOOTPHONE, props)} />
  )
}
