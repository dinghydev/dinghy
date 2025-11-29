import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PACKAGE_CONTAINMENT = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;startArrow=sysMLPackCont;startSize=12;endArrow=none;',
  },
}

export function PackageContainment(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, PACKAGE_CONTAINMENT)} />
  )
}
