import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE_LOAD_TESTING_CONTROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_load_testing_controller;',
  },
  _original_width: 24,
  _original_height: 24,
}

export function RoleLoadTestingController(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_LOAD_TESTING_CONTROLLER}
      {...props}
      _style={extendStyle(ROLE_LOAD_TESTING_CONTROLLER, props)}
    />
  )
}
