import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMS_AND_CONDITIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.terms_and_conditions',
  },
  _original_width: 37,
  _original_height: 50,
}

export function TermsAndConditions(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMS_AND_CONDITIONS}
      {...props}
      _style={extendStyle(TERMS_AND_CONDITIONS, props)}
    />
  )
}
