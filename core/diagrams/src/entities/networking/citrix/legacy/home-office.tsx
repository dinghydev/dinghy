import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOME_OFFICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.home_office;',
  },
  _width: 80,
  _height: 55.5,
}

export function HomeOffice(props: NodeProps) {
  return (
    <Shape
      {...HOME_OFFICE}
      {...props}
      _style={extendStyle(HOME_OFFICE, props)}
    />
  )
}
