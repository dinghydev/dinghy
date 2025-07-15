import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIGRATION_HUB_REFACTOR_SPACES_ENVIRONMENTS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.migration_hub_refactor_spaces_environments;',
  _width: 78,
  _height: 78,
}

export function MigrationHubRefactorSpacesEnvironments(
  props: DiagramNodeProps,
) {
  return <Shape {...MIGRATION_HUB_REFACTOR_SPACES_ENVIRONMENTS} {...props} />
}
