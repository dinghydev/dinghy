import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NAVIGABILITY_NOTATION =
  {
    _style: {
      dependency:
        'endArrow=open;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=1;',
    },
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEndNavigabilityNotation(
  props: NodeProps,
) {
  return (
    <Dependency
      {...ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NAVIGABILITY_NOTATION}
      {...props}
      _style={extendStyle(
        ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_NAVIGABILITY_NOTATION,
        props,
      )}
    />
  )
}
