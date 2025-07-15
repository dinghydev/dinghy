import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NAVIGABILITY_NOTATION =
  {
    _style:
      'endArrow=open;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=1;',
    _width: 160,
    _height: 0,
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEndNavigabilityNotation(
  props: DiagramNodeProps,
) {
  return (
    <Dependency
      {...ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NAVIGABILITY_NOTATION}
      {...props}
    />
  )
}
