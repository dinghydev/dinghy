import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_COMPOSITE_ASSOCIATION =
  {
    _style:
      'endArrow=none;startArrow=diamondThin;endFill=0;startFill=1;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=1;startSize=8;endSize=8;',
    _width: 160,
    _height: 0,
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEndCompositeAssociation(
  props: DiagramNodeProps,
) {
  return (
    <Dependency
      {...ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_COMPOSITE_ASSOCIATION}
      {...props}
    />
  )
}
