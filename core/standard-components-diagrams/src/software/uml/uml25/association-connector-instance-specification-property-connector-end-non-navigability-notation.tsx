import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NON_NAVIGABILITY_NOTATION =
  {
    _style: {
      dependency:
        'endArrow=none;startArrow=sysMLx;endFill=0;startFill=0;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=1;startSize=8;',
    },
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEndNonNavigabilityNotation(
  props: DiagramNodeProps,
) {
  return (
    <Dependency
      {...ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NON_NAVIGABILITY_NOTATION}
      {...props}
    />
  )
}
