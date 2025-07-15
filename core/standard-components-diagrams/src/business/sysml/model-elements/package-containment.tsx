import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE_CONTAINMENT = {
  _style:
    'edgeStyle=none;html=1;startArrow=sysMLPackCont;startSize=12;endArrow=none;',
  _width: 160,
  _height: 0,
}

export function PackageContainment(props: DiagramNodeProps) {
  return <Dependency {...PACKAGE_CONTAINMENT} {...props} />
}
