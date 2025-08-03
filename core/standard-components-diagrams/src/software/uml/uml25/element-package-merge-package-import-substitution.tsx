import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELEMENT_PACKAGE_MERGE_PACKAGE_IMPORT_SUBSTITUTION = {
  _style: {
    dependency:
      'endArrow=open;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function ElementPackageMergePackageImportSubstitution(
  props: DiagramNodeProps,
) {
  return (
    <Dependency
      {...ELEMENT_PACKAGE_MERGE_PACKAGE_IMPORT_SUBSTITUTION}
      {...props}
    />
  )
}
