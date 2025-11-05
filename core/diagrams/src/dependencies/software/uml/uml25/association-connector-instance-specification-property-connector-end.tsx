import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END =
  {
    _style: {
      dependency:
        'endArrow=none;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;labelBackgroundColor=none;strokeWidth=3;',
    },
  }

export function AssociationConnectorInstanceSpecificationPropertyConnectorEnd(
  props: NodeProps,
) {
  return (
    <Dependency
      {...ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END}
      {...props}
      _style={extendStyle(
        ASSOCIATION_CONNECTOR_INSTANCE_SPECIFICATION_PROPERTY_CONNECTOR_END,
        props,
      )}
    />
  )
}
