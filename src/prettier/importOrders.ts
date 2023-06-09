export type OrgName = `@${string}`

export const orderDefault = ['^react', '^next', '^@', '^\\$', '<THIRD_PARTY_MODULES>', '^[.][.]', '^[.]']

export const orderNest = ['^@nestjs', '<THIRD_PARTY_MODULES>', '^src/', '^./prisma', '^./app', '^[.][.]', '^[.]']

export function orderNestWithOrg(org: OrgName) {
  return ['^@nestjs', '<THIRD_PARTY_MODULES>', `^${org}`, '^src/', '^./prisma', '^./app', '^[.][.]', '^[.]']
}

export const orderNext = ['^react', '^next', '<THIRD_PARTY_MODULES>', '^\\$', '^\\$styles', '^[.][.]', '^[.]']

export function orderNextWithOrg(org: OrgName) {
  return ['^react', '^next', '<THIRD_PARTY_MODULES>', `^${org}`, '^\\$', '^\\$styles', '^[.][.]', '^[.]']
}
