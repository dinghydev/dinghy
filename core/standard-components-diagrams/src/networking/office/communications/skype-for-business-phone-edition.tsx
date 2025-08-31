import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYPE_FOR_BUSINESS_PHONE_EDITION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.skype_for_business_phone_edition;',
  _width: 76,
  _height: 45,
}

export function SkypeForBusinessPhoneEdition(props: DiagramNodeProps) {
  return (
    <Shape
      {...SKYPE_FOR_BUSINESS_PHONE_EDITION}
      {...props}
      _style={extendStyle(SKYPE_FOR_BUSINESS_PHONE_EDITION, props)}
    />
  )
}
