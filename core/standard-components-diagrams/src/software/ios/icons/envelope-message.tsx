import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENVELOPE_MESSAGE = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.envelope_(message);',
  _width: 30,
  _height: 30,
}

export function EnvelopeMessage(props: DiagramNodeProps) {
  return <Shape {...ENVELOPE_MESSAGE} {...props} />
}
