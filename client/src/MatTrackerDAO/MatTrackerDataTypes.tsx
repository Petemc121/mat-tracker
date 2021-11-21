type getMembersResponse = {
  member_id: number;
  member_name: string | null;
  member_image: string | null;
  member_phone: string | null;
  member_belt: string | null;
  member_joined_at: string | null;
  member_paid: string | null;
  member_frozen: string | null;
};

type getMembersInput = {
  name: string;
};

export type { getMembersResponse, getMembersInput };
