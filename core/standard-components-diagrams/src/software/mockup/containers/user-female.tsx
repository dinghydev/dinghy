import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_FEMALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.containers.userFemale;strokeColor=#666666;strokeColor2=#008cff;',
  },
  _width: 60,
  _height: 60,
}

export function UserFemale(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_FEMALE}
      {...props}
      _style={extendStyle(USER_FEMALE, props)}
    />
  )
}
