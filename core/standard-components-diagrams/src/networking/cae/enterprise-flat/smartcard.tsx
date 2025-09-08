import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMARTCARD = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.smartcard',
  },
  _original_width: 50,
  _original_height: 32,
}

export function Smartcard(props: DiagramNodeProps) {
  return (
    <Shape {...SMARTCARD} {...props} _style={extendStyle(SMARTCARD, props)} />
  )
}
