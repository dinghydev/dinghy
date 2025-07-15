import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROTOCOL_TRANSLATOR = {
  _style:
    'shape=mxgraph.cisco.misc.protocol_translator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 48,
  _height: 75,
}

export function ProtocolTranslator(props: DiagramNodeProps) {
  return <Shape {...PROTOCOL_TRANSLATOR} {...props} />
}
