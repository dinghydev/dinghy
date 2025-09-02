import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENVELOPE_EMPTY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.envelope_(empty);',
  },
  _original_width: 30,
  _original_height: 30,
}

export function EnvelopeEmpty(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENVELOPE_EMPTY}
      {...props}
      _style={extendStyle(ENVELOPE_EMPTY, props)}
    />
  )
}
