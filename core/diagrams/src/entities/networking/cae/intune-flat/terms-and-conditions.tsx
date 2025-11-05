import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMS_AND_CONDITIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.terms_and_conditions',
  },
  _width: 37,
  _height: 50,
}

export function TermsAndConditions(props: NodeProps) {
  return (
    <Shape
      {...TERMS_AND_CONDITIONS}
      {...props}
      _style={extendStyle(TERMS_AND_CONDITIONS, props)}
    />
  )
}
