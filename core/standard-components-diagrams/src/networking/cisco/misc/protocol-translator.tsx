import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOCOL_TRANSLATOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.protocol_translator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 48,
  _original_height: 75,
}

export function ProtocolTranslator(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROTOCOL_TRANSLATOR}
      {...props}
      _style={extendStyle(PROTOCOL_TRANSLATOR, props)}
    />
  )
}
