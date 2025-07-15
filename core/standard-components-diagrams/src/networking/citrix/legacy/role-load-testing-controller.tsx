import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_LOAD_TESTING_CONTROLLER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_load_testing_controller;',
  _width: 24,
  _height: 24,
}

export function RoleLoadTestingController(props: DiagramNodeProps) {
  return <Shape {...ROLE_LOAD_TESTING_CONTROLLER} {...props} />
}
