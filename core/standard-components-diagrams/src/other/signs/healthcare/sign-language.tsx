import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGN_LANGUAGE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.sign_language;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 101,
  _original_height: 84,
}

export function SignLanguage(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGN_LANGUAGE}
      {...props}
      _style={extendStyle(SIGN_LANGUAGE, props)}
    />
  )
}
