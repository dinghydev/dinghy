import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_KEY_ENFORCEMENT = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTkuOTg2IiB3aWR0aD0iMTUuNzIzIiB2aWV3Qm94PSIwIDAgMTUuNzIzIDE5Ljk4NiI+JiN4YTsJPHBhdGggZmlsbD0iIzQyODVmNCIgZD0iTTMuNjM0IDE0LjU4NnYtMy43NWMwLS4xNS0uMjktLjM0LS40OS0uNDNhNS40NiA1LjQ2IDAgMSAxIDcuNDQtNi44MyA1LjQgNS40IDAgMCAxLTIuNzMgNi43OS44Mi44MiAwIDAgMC0uNTQuOXY4LjcyaC0zLjY4di0xLjc1SC4wMjR2LTMuNjV6bTMuNjQtOS4xMWExLjgyIDEuODIgMCAxIDAtMy42NC0uMDYgMS44MyAxLjgzIDAgMCAwIDEuOCAxLjg1aDBhMS44NCAxLjg0IDAgMCAwIDEuODMtMS43OXoiLz4mI3hhOwk8cGF0aCBmaWxsPSIjNjY5ZGY2IiBkPSJNMTUuMzc0IDMuNTc2YTUuNDQgNS40NCAwIDAgMC02LjMyLTMuNDQgNS40NCA1LjQ0IDAgMCAxIDEuMTMgMTAuMjMuODQuODQgMCAwIDAtLjU1Ljl2OC43MmgyLjQzdi04LjcxYS44My44MyAwIDAgMSAuNTUtLjkgNS40IDUuNCAwIDAgMCAyLjc2LTYuOHoiLz4mI3hhOzwvc3ZnPg==;',
  _width: 34,
  _height: 42,
}

export function SecurityKeyEnforcement(props: DiagramNodeProps) {
  return <Shape {...SECURITY_KEY_ENFORCEMENT} {...props} />
}
