import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIGRATION_HUB_REFACTOR_SPACES_SERVICES = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.migration_hub_refactor_spaces_services;',
  _width: 60,
  _height: 60,
}

export function MigrationHubRefactorSpacesServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIGRATION_HUB_REFACTOR_SPACES_SERVICES}
      {...props}
      _style={extendStyle(MIGRATION_HUB_REFACTOR_SPACES_SERVICES, props)}
    />
  )
}
