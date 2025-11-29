import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGN_LANGUAGE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.sign_language;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 101,
  _height: 84,
}

export function SignLanguage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIGN_LANGUAGE)} />
}
