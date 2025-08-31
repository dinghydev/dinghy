import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYPE_FOR_BUSINESS_DIRECTOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.skype_for_business_director;',
  },
  _width: 54,
  _height: 55,
}

export function SkypeForBusinessDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...SKYPE_FOR_BUSINESS_DIRECTOR}
      {...props}
      _style={extendStyle(SKYPE_FOR_BUSINESS_DIRECTOR, props)}
    />
  )
}
