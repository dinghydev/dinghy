import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE_CONTAINMENT = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;startArrow=sysMLPackCont;startSize=12;endArrow=none;',
  },
}

export function PackageContainment(props: DiagramNodeProps) {
  return (
    <Dependency
      {...PACKAGE_CONTAINMENT}
      {...props}
      _style={extendStyle(PACKAGE_CONTAINMENT, props)}
    />
  )
}
