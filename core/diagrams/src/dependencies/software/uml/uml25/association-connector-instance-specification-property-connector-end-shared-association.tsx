import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_SHARED_ASSOCIATION =
  {
    _style: {
      dependency:
        'endArrow=none;startArrow=diamondThin;endFill=0;startFill=0;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=1;startSize=8;endSize=8;',
    },
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEndSharedAssociation(
  props: NodeProps,
) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(
        props,
        ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END_SHARED_ASSOCIATION,
      )}
    />
  )
}
