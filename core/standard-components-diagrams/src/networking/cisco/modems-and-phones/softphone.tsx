import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTPHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.softphone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 56,
}

export function Softphone(props: DiagramNodeProps) {
  return (
    <Shape {...SOFTPHONE} {...props} _style={extendStyle(SOFTPHONE, props)} />
  )
}
